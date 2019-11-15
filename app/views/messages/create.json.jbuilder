
# json.user_name    @message.user.name
# json.content    @message.content
# json.date    @message.created_at.strftime("%Y/%m/%d %H:%M")
# json.time    @message.created_at
# json.id    @message.id

json.id      @message.id
json.content @message.content 
json.date    @message.created_at.strftime("%Y/%m/%d %H:%M")
json.user_name @message.user.name
json.image   @message.image.url

