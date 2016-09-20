class Book
# write your code here
  @title = String.new
  attr_accessor :title
  no_cap = ["the", "a", "an", "a", "and", "in", "of"]
  def title
  # book.title.split.map do |word|
  #   if (book.title[0] == word)
  #     #Do Nothing
  #   elsif no_cap.include?(word)  
  #   else word = word.capitalize
  #   end 
  # end
  # return book.title.join 
end
end
