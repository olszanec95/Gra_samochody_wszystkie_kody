#pragma strict
import UnityEngine.UI;

var manager : Manager;
var Tuning : GameObject;
var ScoreTxt : Text;
var ScoreTxt2 : Text;

var speedLevel : int;
var accelerationLevel : int;
var controlLevel : int;

var speedSlider : Slider;
var accelerationSlider : Slider;
var ctrlSlider : Slider;

var speedTxt : Text;
var speedPrize : Text;
var accelerationTxt : Text;
var accelerationPrize : Text;
var controlTxt : Text;
var controlPrize : Text;

var locked : GameObject[];
var lockedPrize : int[];
var lockedLife : int[];
var lockedPictures : Sprite[];
var prize : int = 0;
var lockedBut : GameObject;
var lockedPicture : Sprite;
var lockedPanel : GameObject;
var lockedTxt : Text;

var i : int;
var n : int;
var index : int;
var nazwa : String;
var car2 : int = 0;
var car3 : int = 0;
var car4 : int = 0;
var car5 : int = 0;
var car6 : int = 0;


function Start () {
	manager = gameObject.Find("Manager").GetComponent(Manager);
	Tuning.SetActive(false);
	lockedPanel.SetActive(false);


	//manager.currentCarScript.speedLevel = PlayerPrefs.GetInt("SpeedLevel");
	//manager.currentCarScript.speedLevel = PlayerPrefs.GetInt("AccelerationLevel");
	//manager.currentCarScript.speedLevel = PlayerPrefs.GetInt("ControlLevel");
	car2 = PlayerPrefs.GetInt("car2");
	car3 = PlayerPrefs.GetInt("car3");
	car4 = PlayerPrefs.GetInt("car4");
	car5 = PlayerPrefs.GetInt("car5");
	car6 = PlayerPrefs.GetInt("car6");
}

function Update () 
{

	if(manager.currentCarScript)
	{
		manager.currentCarScript.speedLevel = PlayerPrefs.GetInt("SpeedLevel"+nazwa);
		manager.currentCarScript.accelerationLevel = PlayerPrefs.GetInt("AccelerationLevel"+nazwa);
		manager.currentCarScript.controlLevel = PlayerPrefs.GetInt("ControlLevel"+nazwa);
		speedLevel = manager.currentCarScript.speedLevel;
		accelerationLevel = manager.currentCarScript.accelerationLevel;
		controlLevel = manager.currentCarScript.controlLevel;

	}

	if(Input.GetKey(KeyCode.Escape) && !Tuning.activeSelf)
	{
		Application.LoadLevel("Menu");
	}
	else if(Input.GetKey(KeyCode.Escape) && Tuning.activeSelf)
	{
		Tuning.SetActive(false);
	}

	ScoreTxt.text = ""+manager.score;
	ScoreTxt2.text = "SCORE: "+manager.score;
	speedTxt.text = ""+speedLevel;
	accelerationTxt.text = ""+accelerationLevel;
	controlTxt.text = ""+controlLevel;
	speedPrize.text = " "+(1+speedLevel) * 2000;
	accelerationPrize.text = " "+(1+accelerationLevel) * 2000;
	controlPrize.text = " "+(1+controlLevel) * 2000;

	speedSlider.value = speedLevel;
	accelerationSlider.value = accelerationLevel;
	ctrlSlider.value = controlLevel;


	cheeckCar2();
	cheeckCar3();
	cheeckCar4();
	cheeckCar5();
	cheeckCar6();
	i = (3 * index) - 3;
}


function Car_1()
{
	if(!lockedPanel.activeSelf)
	{
		manager.currentCar = manager.Car[0];
		manager.currentCarScript = manager.currentCar.GetComponent(CarControlJS);
		manager.currentCarScript.speedLevel = PlayerPrefs.GetInt("SpeedLevel_1");
		manager.currentCarScript.speedLevel = PlayerPrefs.GetInt("AccelerationLevel_1");
		manager.currentCarScript.speedLevel = PlayerPrefs.GetInt("ControlLevel_1");
		index = 1;
		Tuning.SetActive(true);
	}

	nazwa = manager.currentCar.name;
}

function Car_2()
{
	if(locked[0].tag == "Locked")
	{
		lockedPanel.SetActive(true);
		lockedTxt.text = "You have to unlocked this car.\nYou need some money:\n$ "+lockedPrize[0]+"\nThis car has health point: "+lockedLife[0];
		prize = lockedPrize[0];
		lockedBut = locked[0];
		lockedPicture = lockedPictures[0];
		n=0;
	}
	else if(!lockedPanel.activeSelf)
	{
		manager.currentCar = manager.Car[1];
		manager.currentCarScript = manager.currentCar.GetComponent(CarControlJS);
		manager.currentCarScript.speedLevel = PlayerPrefs.GetInt("SpeedLevel_2");
		manager.currentCarScript.speedLevel = PlayerPrefs.GetInt("AccelerationLevel_2");
		manager.currentCarScript.speedLevel = PlayerPrefs.GetInt("ControlLevel_2");
		index = 2;
		Tuning.SetActive(true);
	}

	nazwa = manager.currentCar.name;
}

function Car_3()
{
	if(locked[1].tag == "Locked")
	{
		lockedPanel.SetActive(true);
		lockedTxt.text = "You have to unlocked this car.\nYou need some money:\n$ "+lockedPrize[1]+"\nThis car has health point: "+lockedLife[1];
		prize = lockedPrize[1];
		lockedBut = locked[1];
		lockedPicture = lockedPictures[1];
		n=1;
	}
	else if(!lockedPanel.activeSelf)
	{
		manager.currentCar = manager.Car[2];
		manager.currentCarScript = manager.currentCar.GetComponent(CarControlJS);
		manager.currentCarScript.speedLevel = PlayerPrefs.GetInt("SpeedLevel_3");
		manager.currentCarScript.speedLevel = PlayerPrefs.GetInt("AccelerationLevel_3");
		manager.currentCarScript.speedLevel = PlayerPrefs.GetInt("ControlLevel_3");
		index = 3;
		Tuning.SetActive(true);
	}

	nazwa = manager.currentCar.name;
}

function Car_4()
{
	if(locked[2].tag == "Locked")
	{
		lockedPanel.SetActive(true);
		lockedTxt.text = "You have to unlocked this car.\nYou need some money:\n$ "+lockedPrize[2]+"\nThis car has health point: "+lockedLife[2];
		prize = lockedPrize[2];
		lockedBut = locked[2];
		lockedPicture = lockedPictures[2];
		n=2;
	}
	else if(!lockedPanel.activeSelf)
	{
		manager.currentCar = manager.Car[3];
		manager.currentCarScript = manager.currentCar.GetComponent(CarControlJS);
		manager.currentCarScript.speedLevel = PlayerPrefs.GetInt("SpeedLevel_4");
		manager.currentCarScript.speedLevel = PlayerPrefs.GetInt("AccelerationLevel_4");
		manager.currentCarScript.speedLevel = PlayerPrefs.GetInt("ControlLevel_4");
		index = 4;
		Tuning.SetActive(true);
	}

	nazwa = manager.currentCar.name;
}

function Car_5()
{
	if(locked[3].tag == "Locked")
	{
		lockedPanel.SetActive(true);
		lockedTxt.text = "You have to unlocked this car.\nYou need some money:\n$ "+lockedPrize[3]+"\nThis car has health point: "+lockedLife[3];
		prize = lockedPrize[3];
		lockedBut = locked[3];
		lockedPicture = lockedPictures[3];
		n=3;
	}
	else if(!lockedPanel.activeSelf)
	{
		manager.currentCar = manager.Car[4];
		manager.currentCarScript = manager.currentCar.GetComponent(CarControlJS);
		manager.currentCarScript.speedLevel = PlayerPrefs.GetInt("SpeedLevel_5");
		manager.currentCarScript.speedLevel = PlayerPrefs.GetInt("AccelerationLevel_5");
		manager.currentCarScript.speedLevel = PlayerPrefs.GetInt("ControlLevel_5");
		index = 5;
		Tuning.SetActive(true);
	}

	nazwa = manager.currentCar.name;
}

function Car_6()
{
	if(locked[4].tag == "Locked")
	{
		lockedPanel.SetActive(true);
		lockedTxt.text = "You have to unlocked this car.\nYou need some money:\n$ "+lockedPrize[4]+"\nThis car has health point: "+lockedLife[4];
		prize = lockedPrize[4];
		lockedBut = locked[4];
		lockedPicture = lockedPictures[4];
		n=4;
	}
	else if(!lockedPanel.activeSelf)
	{
		manager.currentCar = manager.Car[5];
		manager.currentCarScript = manager.currentCar.GetComponent(CarControlJS);
		manager.currentCarScript.speedLevel = PlayerPrefs.GetInt("SpeedLevel_6");
		manager.currentCarScript.speedLevel = PlayerPrefs.GetInt("AccelerationLevel_6");
		manager.currentCarScript.speedLevel = PlayerPrefs.GetInt("ControlLevel_6");
		index = 6;
		Tuning.SetActive(true);
	}

	nazwa = manager.currentCar.name;
}




function BuyCar()
{
	if(manager.score >= prize)
	{
		PlayerPrefs.SetInt("Score", manager.score - prize);
		lockedBut.tag = "Untagged";
		lockedBut.GetComponent(Image).sprite = lockedPicture;
		lockedPanel.SetActive(false);
		PlayerPrefs.SetInt("car"+(n+2), 1);
	}
}



function BackBuy()
{
	lockedPanel.SetActive(false);
}



function Back()
{
	Tuning.SetActive(false);
}

function Play()
{
	Application.LoadLevel(manager.currentMap+manager.typeGame);
}


function Speed()
{

	if(speedLevel < 10 && manager.score >= 2000*(1+speedLevel))
	{
		manager.score -= (2000*(1+speedLevel));
		manager.currentCarScript.speedLevel++;
		PlayerPrefs.SetInt("Score", manager.score);
		PlayerPrefs.SetInt("SpeedLevel"+nazwa, manager.currentCarScript.speedLevel);
	}
}

function Acceleration()
{
	if(accelerationLevel < 10 && manager.score >= 2000*(1+accelerationLevel))
	{
		manager.score -= (2000*(1+accelerationLevel));
		manager.currentCarScript.accelerationLevel++;
		PlayerPrefs.SetInt("Score", manager.score);
		PlayerPrefs.SetInt("AccelerationLevel"+nazwa, manager.currentCarScript.accelerationLevel);
	}
}

function Control()
{
	if(controlLevel < 10 && manager.score >= 2000*(1+controlLevel))
	{
		manager.score -= (2000*(1+controlLevel));
		manager.currentCarScript.controlLevel++;
		PlayerPrefs.SetInt("Score", manager.score);
		PlayerPrefs.SetInt("ControlLevel"+nazwa, manager.currentCarScript.controlLevel);
	}
}

function cheeckCar2()
{
	if(car2 == 1)
	{
		locked[0].tag = "Untagged";
		locked[0].GetComponent(Image).sprite = lockedPictures[0];
		//lockedPanel.SetActive(false);
	}
}

function cheeckCar3()
{
	if(car3 == 1)
	{
		locked[1].tag = "Untagged";
		locked[1].GetComponent(Image).sprite = lockedPictures[1];
		//lockedPanel.SetActive(false);
	}
}

function cheeckCar4()
{
	if(car4 == 1)
	{
		locked[2].tag = "Untagged";
		locked[2].GetComponent(Image).sprite = lockedPictures[2];
		//lockedPanel.SetActive(false);
	}
}

function cheeckCar5()
{
	if(car5 == 1)
	{
		locked[3].tag = "Untagged";
		locked[3].GetComponent(Image).sprite = lockedPictures[3];
		//lockedPanel.SetActive(false);
	}
}

function cheeckCar6()
{
	if(car5 == 1)
	{
		locked[4].tag = "Untagged";
		locked[4].GetComponent(Image).sprite = lockedPictures[4];
		//lockedPanel.SetActive(false);
	}
}


