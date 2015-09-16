describe('player', function() {
  it('starts the game and shows whos turn it is', function() {
    expect(turn).to.eq("X")
  });

  it('will alternate players after a player goes', function() {
    var turn = "X";
    expect(turn.switchPlayer()).to.eq("O");
  });
});
