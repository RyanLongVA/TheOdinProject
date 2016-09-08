#write your code here
def echo words
    return words
end

def shout words
    return words.upcase
end

def repeat (word, number = 2)
    for i in 1..number
     word = (((word + " ")*2) - word[word.length - 1]
 end
