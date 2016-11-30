# RECURSIVE FUNCTIONS
# this is how it works --> with recursion
	# sum_list [1,2,3], 0
	# sum_list [2,3], 1
	# sum_list [3], 3
	# sum_list [], 6

	# so you will pass in an list/array of numbers and then the accumulator is basically the starting point for the sum and then the accumulator(this is just a word, it isn't a elixir specific term) is where the sum goes as it goes through the function.  It starts by adding the first in the list/array into the accumulator spot and then it goes back and adds the second number to the existing amount in the accumulator spot and so on until the list/array is empty and the accumulator reflects the total sum

defmodule Math do
	# head is the first item in the list and tail is the rest of the list
	def sum_list([head | tail], accumulator) do
		# this is calling the original function again but it's only producing the tail in the list and the head is added to the accumulator amount and this will continue until the tail is empty
		sum_list(tail, head+accumulator)
	end
	# when this list/array is empty it will only return the amount of the accumulator
	def sum_list([], accumulator) do
		# the only thing that is returned is the accumulator
		accumulator
	end
end