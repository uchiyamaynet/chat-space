
json.id      @message.id
json.content @message.content 
json.date    @message.created_at.strftime("%Y年%m月%d日 %H時%M分")
# json.date    @message.created_at.strftime("%Y/%m/%d %H:%M")

json.user_name @message.user.name
json.image   @message.image.url

