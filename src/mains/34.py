myBool = True

myBool = handle_boolean(myBool)
assert myBool == False

result = is_correct(10 + 5, 15)
assert result == True

result = is_correct(10 + 5, 14)
assert result == False

myBool = handle_boolean(myBool)
assert myBool == True
print("OK!")