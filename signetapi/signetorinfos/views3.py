import json
from django.http import JsonResponse
from django.forms.models import model_to_dict
from signetorinfos.models import Signet
from signetorinfos.serializers import SignetSerializer
import requests
from rest_framework.decorators import api_view
from tokenurl.models import TokenURL
from tokenurl.serializers import TokenURLSerializer
from followsystem.models import UserFollowing
from followsystem.serializers import UserSerializer


@api_view(["GET"])
# def api_add(request):
def api_home(request, signetorowneraddress):
    MessageSender = signetorowneraddress
    information = UserFollowing.objects.filter(isfollowing=MessageSender)
    followedjsonobj = []
    followedjsonobj.append(MessageSender)
    for i in information:
        data = UserSerializer(i).data
        Isfollowed = data['isfollowed']
        followedjsonobj.append(Isfollowed)

    information = Signet.objects.filter(
        messageSender__in=followedjsonobj).order_by("time")
    jsonobj = []
    for i in reversed(information):
        data = SignetSerializer(i).data
        MessageSender = data['messageSender']
        Signetoraddress = data['signetoraddress']
        MessageId = data['messageId']
        TokenURI = data['tokenURI']
        Time = data['time']
        try:
            idnumb = TokenURI.split('/read/')[1]
            information = TokenURL.objects.filter(idnum=idnumb)
            for i in information:
                data = TokenURLSerializer(i).data
                imageurl = ""
                if data["image"]:
                    imageurl = "https://api.signet.ink"+data["image"]
                description = data['description']
            # get_response = requests.get(endpoint)
            # imageURL = get_response.json()['image']
            # description = get_response.json()['description']
                jsonobj.append({
                    "messageSender": f"{MessageSender}",
                    "signetoraddress": f"{Signetoraddress}",
                    "messageId": f"{MessageId}",
                    "tokenimageURL": f"{imageurl}",
                    "tokendescription": f"{description}",
                    "time": f"{Time}"
                })
        except:
            ipfsURL = TokenURI
            information = TokenURL.objects.filter(imageurl=ipfsURL)
            data = TokenURLSerializer(information[0]).data
            imageurl = ""
            if data["image"]:
                imageurl = "https://api.signet.ink"+data["image"]
            description = data['description']
        # get_response = requests.get(endpoint)
        # imageURL = get_response.json()['image']
        # description = get_response.json()['description']
            jsonobj.append({
                "messageSender": f"{MessageSender}",
                "signetoraddress": f"{Signetoraddress}",
                "messageId": f"{MessageId}",
                "tokenimageURL": f"{imageurl}",
                "tokendescription": f"{description}",
                "time": f"{Time}"
            })

    # json = {
    #     "name": "Signet",
    #     "description": f"{description}",
    #     "image": f"{imageurl}",
    # }
    return JsonResponse(jsonobj, safe=False, status=200)

    # Coupon.objects.filter(code=savedata).delete()
    # Product.objects.create(title='used',content=savedata,price='10.00')
