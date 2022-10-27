import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import styles from "../styles/Dashbaord.module.css"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"
import styles1 from "../styles/Dashbaord.module.css"
import stylesprofile from "../styles/profile.module.css"
import { EmojiHappyIcon, SparklesIcon, PhotographIcon, XIcon } from "@heroicons/react/outline"
import {
    usePrepareContractWrite,
    useAccount,
    useConnect,
    useContract,
    useContractRead,
    useContractWrite,
    useNetwork,
    useWaitForTransaction,
} from "wagmi"
export default function Signetor() {
    const { address } = useAccount()
    const [input, setInput] = useState("")
    const [File, setFile] = useState("")
    const [selectedFile, setSelectedFile] = useState(null)
    const [ready, setready] = useState(false)
    const { addToast } = useToasts()
    const filePickerRef = useRef(null)
    function setnewname() {
        var formdata = new FormData()
        formdata.append("address", address)
        formdata.append("name", input)
        if (File) {
            formdata.append("profilepic", File)
        } else {
            formdata.append("profilepic", "None")
        }
        var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
        }

        fetch("https://api.signet.ink/pfi/name/", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.toString() == "duplicate") {
                    errortoast("Duplicate Name!")
                } else {
                    successtoast()
                    fetch("https://api.signet.ink/pfi/pfp/", requestOptions)
                        .then((response) => response.json())
                        .then((result) => {
                            console.log(result)
                            if (result.toString() == "updated") {
                                setready(true)
                            } else {
                                errortoast("Please choose your profile pic!")
                            }
                        })
                        .catch((error) => console.log("error", error))
                }
            })
            .catch((error) => console.log("error", error))
    }
    function errortoast(e) {
        addToast(e, { appearance: "error" })
    }
    function successtoast() {
        addToast("Name is available!", { appearance: "success" })
    }
    const addImageToPost = (e) => {
        const reader = new FileReader()

        if (e.target.files[0] && verificationPicFile(e.target) != false) {
            reader.readAsDataURL(e.target.files[0])
            addToast("Picture Uploaded Successfully", { appearance: "success" })
            setFile(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }
    }
    function verificationPicFile(file) {
        var fileSize = 0
        var fileMaxSize = 20480 //1M
        var filePath = file.value
        if (filePath) {
            fileSize = file.files[0].size
            var size = fileSize / 1024
            if (size > fileMaxSize) {
                addToast("File size could not exceed 20MB!", { appearance: "warning" })
                file.value = ""
                return false
            } else if (size <= 0) {
                addToast("File size could not be 0!", { appearance: "warning" })
                file.value = ""
                return false
            }
        } else {
            return false
        }
    }
    const { config } = usePrepareContractWrite({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        functionName: "controllorCreateSignetor",
        args: ["Signetor", "SG"],
    })
    const { data: resultss, write: controllorCreateSignetor } = useContractWrite(config)

    const { isLoading: CreateSignetorisLoading, isSuccess: CreateSignetorisSuccess } =
        useWaitForTransaction({
            hash: resultss?.hash,
        })
    useEffect(() => {
        if (CreateSignetorisLoading) {
            addToast("Transaction Submitted...", { appearance: "success" })
        }
    }, [CreateSignetorisLoading])
    useEffect(() => {
        if (CreateSignetorisSuccess) {
            addToast("Signetor Generated Successful!", { appearance: "success" })
        }
    }, [CreateSignetorisSuccess])
    function CreateSignetor() {
        controllorCreateSignetor()
    }
    async function submit() {
        controllorCreateSignetor()
    }
    return (
        <div>
            <div className="h-[100vh] bg-black ">
                <h1 className="grid items-center justify-items-center text-center opacity-100 relative text-3xl lg:text-2xl md:text-1xl sm:text-sm font-bold text-white">
                    You seems new to here, lets generate your signet account!
                </h1>
                <div className="mt-15 text-center flex flex-col justify-center items-center mt-20 items-center justify-items-center text-center opacity-100 relative font-bold text-white">
                    <div className="space-x-1">
                        <div>profile pictrue</div>
                        <div>
                            <div className={stylesprofile.user1}>
                                <div className="text-center">
                                    <button
                                        className={stylesprofile.profile1}
                                        onClick={() => filePickerRef.current.click()}
                                    >
                                        <img
                                            src={selectedFile}
                                            className="rounded-full"
                                            width="80"
                                            height="80"
                                            type="file"
                                            hidden
                                            ref={filePickerRef}
                                            onChange={addImageToPost}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="" onClick={() => filePickerRef.current.click()}>
                        <div className="h-10 w-10 hoverEffect p-2 text-black hover:bg-sky-100" />
                        <input type="file" hidden ref={filePickerRef} onChange={addImageToPost} />
                    </div>
                </div>
                <div className="mt-15 text-center flex flex-col justify-center items-center mt-20 items-center justify-items-center text-center opacity-100 relative font-bold text-white">
                    <div className="mt-20 font-bold text-white">username</div>
                    <input
                        className="text-center bg-transparent border rounded-lg text-sm border-white text-white"
                        rows="1"
                        placeholder=""
                        value={input}
                        disabled={ready}
                        onChange={(e) => setInput(e.target.value)}
                    ></input>
                    <div className="mt-1">
                        {!ready && (
                            <button
                                disabled={!input.trim()}
                                className={styles1.button18}
                                onClick={setnewname}
                            >
                                check
                            </button>
                        )}
                    </div>
                </div>
                {ready && (
                    <div className="mt-20 flex flex-col justify-center items-center">
                        <button
                            className={styles.button85}
                            disabled={!controllorCreateSignetor || CreateSignetorisLoading}
                            onClick={CreateSignetor}
                        >
                            {CreateSignetorisLoading ? "Generating..." : "Generate"}
                        </button>
                        {CreateSignetorisLoading && <div>......</div>}
                    </div>
                )}
            </div>
        </div>
    )
}
