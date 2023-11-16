myDict = {
    "site": "Block2School",
    "Value": True
}

result = get_dict_val(myDict, "site")
assert result == "Block2School"
result = get_dict_val(myDict, "nothing")
assert result == None
print("OK!")