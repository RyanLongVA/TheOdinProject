#write your code here
def translate input
    vowels = ["a", "e", "i", "o"]
    output = input.split("")
    if (output.include?(" ") == false)
    i = 0
    #Method for inputs with no spaces
    while (i == 0) 
      #First Letter is not a vowel
      if ((vowels.include?(output[i])) == false)
          output.insert((output.length - 1), output.delete_at(i))
          
      else
         #Is a vowel
          output = output.join + "ay"
          i += 1
          break
      end
    end
  
      
  #Method for inputs with spaces
  else
    i = output.index(output.first)
    
      output = output.join.split
      while (i <(output.length - 1))
      output[i] = output[i].split("")
      x = output[i].first
        while ((output[i].index(output[i].first))<= (output[i].length - 1))
        
          if ((vowels.include?(output[i][x])) == false)
            output[i].insert((output[i].length - 1), output[i].delete_at(x))
            x += 1 
          else
            output[i] = output[i].join + "ay"
            i += 1
            break
          end
        end
      end
    output = output.join(" ")
    end 
    return output
end 
          
        ######### I rewrote this like twice and changed SO much. 
        ######### Skip Authorized ;)