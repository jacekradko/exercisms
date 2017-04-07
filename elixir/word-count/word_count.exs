defmodule Words do
  @doc """
  Count the number of words in the sentence.

  Words are compared case-insensitively.
  """
  @spec count(String.t) :: map
  def count(sentence) do
    sentence
      |> String.downcase
      |> String.replace(~r/[_!&@$%^,:]/, " ")
      |> String.split(" ", trim: true) 
      |> Enum.reduce(%{}, &calculate/2) 
  end

  defp calculate(elem, result) do 
    Map.update(result, elem, 1, &(&1 + 1))
  end
end