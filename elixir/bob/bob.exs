defmodule Bob do
  def hey(input) do
    cond do
      String.ends_with?(input, "?") -> 
        "Sure."
      Regex.match?(~r/[[:alpha:]]/, input) && String.upcase(input) == input -> 
        "Whoa, chill out!"
      String.trim(input) == "" ->
        "Fine. Be that way!"
      true -> 
        "Whatever."
    end
  end
end
