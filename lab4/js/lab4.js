/* Task 1 - Make Victorian Sponge


Heat oven to 350 degrees
Place a rack in the center position
Line two containers with parchment paper
    In a bowl whisk together dry ingredients
    In another bowl cream beat butter and sugar
        Add in eggs one at a time to the sugar bowl
        Mix in milk after the eggs
Combined dry and wet ingredients
Bake cakes for about 25 to 30 minutes
    Take out cakes
    Cool cakes for 10 minutes
Move one cake onto a plate
    Spread jam on top
    Place other cake on top
    Dust with powdered sugar
Eat
*/


/* Task 2 - Tetris Game
Spawn in starter block
Begin main game loop
    Display the game board every cycle.
        Loop through each row
            Loop through each space
                Find space type from array
                Color space based on type
    Check if a falling block isn’t already spawned
        Spawn a block
        Center it at the spawn
        Show what the next block after will be
    Move the block down 1 space
    Capture user input to go left, right, spin, or down.
        Determine what direction the player has touched, if any.
            If left or right
                Handle special collision cases when trying to rotate when near other blocks/walls.
            If down
                Move the block down by 1 space until finger is let off key
            If up
                Move the block all the way down to the bottom
    If the current block is above another block
        wait 1 second
        make the block permanently there.
    Scan all rows for completion.
        Delete all completed rows.
        If any are deleted,
            move everything down by x deleted rows.
            Speed up game cycle.
    If the new block spawn point is blocked by another block
        signal game over.
    If game over
        reset speed
        reset the board
        reset current block
    Go back up to game loop
*/
