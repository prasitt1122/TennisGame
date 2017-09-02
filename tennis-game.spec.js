function TennisGame(){
  this.reset = ()=>{

  }

  this.echo = ()=>{



  }
}


test('Echo "Love-Love" when press reset button',() =>{

  //Arrange เตรียมเพื่อทดสอบ
  let app = new TennisGame()


  //Act
  app.reset()
  let result = app.echo()






  //Assert คาดหวัง
  expect(result).toBe('Love - Love')

})
