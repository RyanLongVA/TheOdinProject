def translate input 
  input.split.map do |word|
    if %(a e i o).include? word[0]
      "#{word}ay"
    else 
      word.sub(/([^aeio]+)(.*)/, 
        "\\2\\1ay")
      end
    end.join(" ")
  end 
