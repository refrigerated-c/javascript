class RailwayForm{
    submit(){              //these are methods
        alert(this.name + " your form is submitted with train no.: " + this.trainno)
    }
    cancel(){
        alert(this.name + " your form is cancelled with train no.: " + this.trainno)
    }
    fill(givenname, trainno){
        this.name = givenname
        this.trainno = trainno 
    }
}

//now 2 passengers want to travel

//Create a form for Harry
let harryForm = new RailwayForm()
// Fill the form with Harry's detail
harryForm.fill("Harry", 12345)
//Create a form no.1 for Rohan
let rohanForm1 = new RailwayForm()
// Fill the form with Rohan's detail
rohanForm1.fill("Rohan", 144420)
//Create a form no.2 for Rohan
let rohanForm2 = new RailwayForm()
// Fill the form with Rohan's detail
rohanForm2.fill("Rohan", 1449211)



//harry submiited the form but rohan 1st submitted but then cancelled it
// harryForm.submit()
// rohanForm.submit()
// rohanForm.cancel()

//2nd scenario 
//harry took 1 form and submitted it but rohan took 2 form and submitted but later cancelled one of them
harryForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()
