#write your code here
def echo words
    return words
end

def shout words
    return words.upcase
end

#number of times = number of repeats
def repeat (word, number = 2)
    org = word
    for i in (2..number) do
     word = word + " " + org
     i += 1
    end
    return word
end

#return the second parrameter number of letters from the start of a word
def start_of_word (word, lnum = 1)
    array = []
    for i in (1..lnum) do
        array.push(word[i - 1])
    end 
    return array.join
end 

def first_word (words)
    words.split(" ").first 
end

def titleize (words)
    array = words 
    xwords = ["over", "and", "the"]
    if (array.include?(" ")) then
    array = words.split(" ")
    array[0] = array[0].capitalize
      for i in (1..(array.length - 1)) do

        if (xwords.include?(array[i])) then 
        
        else
         array[i] = array[i].capitalize
        end
      end 
      return array.join(" ")
    else 
        array = words.capitalize
        return array
    end
end





    
    
    
        
    
