# Determine which games would have been possible if the bag had 
# been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes. 
# What is the sum of the IDs of those games?

input <- readLines("input.txt")
game_numbers <- c()
red <- c()
blue <- c()
green <- c()

for (line in input) {
  split_line <- strsplit(line, ": ")[[1]]
  game_number <- as.numeric(gsub("Game ", "", split_line[1]))
  game_data <- split_line[2]
  
  sets <- strsplit(game_data, "; ")[[1]]
  
  red_count <- 0
  blue_count <- 0
  green_count <- 0
  
  
  for (set in sets) {
    colors <- strsplit(set, ", ")[[1]]
    
    for (color_count in colors) {
      color_and_count <- strsplit(color_count, " ")[[1]]
      color <- color_and_count[2]
      count <- as.numeric(color_and_count[1])
      
      if (color == "red") {
        red_count <- red_count + count
      } else if (color == "blue") {
        blue_count <- blue_count + count
      } else if (color == "green") {
        green_count <- green_count + count
      }
    }
  }
  game_numbers <- c(game_numbers, game_number)
  red <- c(red, red_count)
  blue <- c(blue, blue_count)
  green <- c(green, green_count)
                            
}

df <- data.frame(Game_Number = game_numbers,
                Red = red,
                Blue = blue,
                Green = green)




calculate_total <- function(df) {
  total <- 0
  for (i in 1:nrow(df)) {
    
    if (df$Red[i] <= 12 && df$Green[i] <= 13 && df$Blue[i] <= 14) {
      print(paste("Game_Number: ", df$Game_Number[i], " Red: ", df$Red[i], " Green: ", df$Green[i], " Blue: ", df$Blue[i]))
      total <- total + df$Game_Number[i]
    }
  }
  return(total)
}

calculate_total(df)
df
