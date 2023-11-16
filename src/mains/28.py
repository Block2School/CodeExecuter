result = containStr("Ce texte de test classique", "q", 3)
assert result == False
result = containStr("This is a good test", "s", 3)
assert result == True
print("OK!")