clientList = ["John", "Mike", "Bob", "Alice", "Seal"]
print("原始客户列表：", clientList)
clientList.append("Smith")
print("修改后客户列表：", clientList)
foodList = ["Black berry", "salad", "candy", "watermelon", "jelly", "carrot", "beef", "bread", "gadus", "cabbage", "celery"]
print("原始菜品列表：", foodList)
foodList.remove("celery")
print("修改后菜品列表：", foodList)
print("每个客户喜欢的菜品：")
i,index = 0,len(clientList)
for client in clientList:
  # for food in foodList:
  if (i < index):
    print(client,"喜欢的菜品:", foodList[i],"，", foodList[-i-1])
    i += 1
