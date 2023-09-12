def are_anagrams(word1, word2):
    word1 = word1.replace(" ", "").lower()
    word2 = word2.replace(" ", "").lower()
    
    return sorted(word1) == sorted(word2)

word1 = input("Introduce la primera palabra: ")
word2 = input("Introduce la segunda palabra: ")

if are_anagrams(word1, word2):
    print(f"'{word1}' and '{word2}' son anagramas.")
else:
    print(f"'{word1}' and '{word2}' no son anagramas.")
