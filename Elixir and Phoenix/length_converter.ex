defmodule MeterToLengthConverter do
	# function
	# we're using function clauses
	# you can call these multiple functions within the module and it will do what you want it to be doing
	# so you will end up calling the exact same function, but changing :feet or :inch in the parentheses before the amount you want to convert and it will convert it accordingly
	def convert(:feet, m) do
		m * 3.28084
	end

	def convert(:inch, m) do
		m * 39.3701
	end
end