class SortableArray
  attr_reader :array

  def initialize(array)
    @array = array
  end

  def partition!(left_pointer, right_pointer)
    pivot_position = right_pointer
    pivot = @array[pivot_position]
    right_pointer = right_pointer - 1

    while true do

      while @array[left_pointer] < pivot do
        left_pointer = left_pointer + 1
      end

      while @array[right_pointer] > pivot do
        right_pointer = right_pointer - 1
      end

      if left_pointer >= right_pointer
        break
      else
        swap(left_pointer, right_pointer)
      end
    end

    swap(left_pointer, pivot_position)

    return left_pointer
  end

  def swap(pointer_one, pointer_two)
    temp_value = @array[pointer_one]
    @array[pointer_one] = @array[pointer_two]
    @array[pointer_two] = temp_value
  end
end
