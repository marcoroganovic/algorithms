def binary_search(arr, val)
  if arr.length == 0
    return nil

  lower_bound = 0
  upper_bound = arr.length - 1

  while lower_bound <= upper_bound do
    midpoint = (upper_bound + lower_bound) / 2
    value_at_midpoint = array[midpoint]

    if value < value_at_midpoint
      upper_bound = midpoint - 1
    elsif value > value_at_midpoint
      lower_bound = midpoint + 1
    elsif value == value_at_midpoint
      return midpoint
    end
  end

  nill
end
