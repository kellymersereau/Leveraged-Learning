# iex hello.ex <-- type this in terminal to run the program
# then in console you can call the function MeterToFootConverter.convert(4.5) and the result will be the amount that this is in meters


# def module creates the function MeterToFootConverter and then it says what to do when this is called
defmodule MeterToFootConverter do
	# this is kind of like the object you are calling and the name is it is convert (convert isn't a set function its just the name of what we are giving this)
	def convert(m) do
		# this is the value of calling the above function
		m * 3.28084
	end
end

defmodule SayHello do
	def hello do
		# there are no string data types in Elixir, this is a byte sequence.  since quotes DONT work in Elixir
		# IO means Input/Output and then puts writes the item to the particular device 
		IO.puts "hello world"
	end
end

# NOTE: you MUST restart iex filename.ex every single time you change the file or call a second command.  It will not work otherwise
