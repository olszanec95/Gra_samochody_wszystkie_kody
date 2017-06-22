#pragma strict
@script RequireComponent(AudioSource)

var typeGame : String;
var currentMap : String;
var currentCar : GameObject;
var currentCarScript : CarControlJS;

var score : int = 0;
var bestTime_1 : float = 60.0f;

var numberOfChallenge : int = 0;
var numberOfChallenge_Map2 : int = 0;
var textOfChallenge = new Array();
var textOfChallenge_Map2 = new Array();


var Car : GameObject[];

function Awake () {
	//Car[0].speedLevel = PlayerPrefs.GetInt("SpeedLevelSamochod_1");
	//Car[0].currentCarScript.accelerationLevel = PlayerPrefs.GetInt("AccelerationLevelSamochod_1");
	//Car[0].currentCarScript.controlLevel = PlayerPrefs.GetInt("ControlLevelSamochod_1");
	//Car[1].currentCarScript.speedLevel = PlayerPrefs.GetInt("SpeedLevelSamochod_2");
	//Car[1].currentCarScript.accelerationLevel = PlayerPrefs.GetInt("AccelerationLevelSamochod_2");
	//Car[1].currentCarScript.controlLevel = PlayerPrefs.GetInt("ControlLevelSamochod_2");

    FillArray_1();
    FillArray_2();
	DontDestroyOnLoad(gameObject);
	Application.LoadLevel("Menu");
}

function Update () {
	numberOfChallenge = PlayerPrefs.GetInt("NumberOfChallenge");
	numberOfChallenge_Map2 = PlayerPrefs.GetInt("NumberOfChallenge_Map2");
	score = PlayerPrefs.GetInt("Score");
	bestTime_1 = PlayerPrefs.GetFloat("BestTime");

}

function FillArray_1()
{
    textOfChallenge[0] = "1/10. Survive 15 s.";
    textOfChallenge[1] = "2/10. Destroy 15 things.";
    textOfChallenge[2] = "3/10. Survive 30 s.";
    textOfChallenge[3] = "4/10. Cost chase > 5000$.";
    textOfChallenge[4] = "5/10. Collect every pack of money (3).";
    textOfChallenge[5] = "6/10. Survive 45 s.";
    textOfChallenge[6] = "7/10. Collect every pack of money (5).";
    textOfChallenge[7] = "8/10. Cost chase > 10,000$.";
    textOfChallenge[8] = "9/10. Survive 60 s.";
    textOfChallenge[9] = "10/10. Collect every pack of money (7).";
}

function FillArray_2()
{
    textOfChallenge_Map2[0] = "1/10. Survive 45 s.";
    textOfChallenge_Map2[1] = "2/10. Destroy 25 things.";
    textOfChallenge_Map2[2] = "3/10. Survive 60 s.";
    textOfChallenge_Map2[3] = "4/10. Cost chase > 10,000$.";
    textOfChallenge_Map2[4] = "5/10. Collect every pack of money (5).";
    textOfChallenge_Map2[5] = "6/10. Survive 75 s.";
    textOfChallenge_Map2[6] = "7/10. Collect every pack of money (7).";
    textOfChallenge_Map2[7] = "8/10. Cost chase > 15,000$.";
    textOfChallenge_Map2[8] = "9/10. Survive 90 s.";
    textOfChallenge_Map2[9] = "10/10. Collect every pack of money (9).";
}

