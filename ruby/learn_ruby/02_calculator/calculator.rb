#write your code here
def add (n1, n2)
  n1 + n2
end 

def subtract (n1, n2)
  n1 - n2
end 

def sum array
  ans1 = 0 
  array.each do |n|
    ans1 = ans1 + n 
  end
  # if ans1 === (1...Float::INFINITY)
  # else
  #   ans1 = 0
  # end
  return ans1
end