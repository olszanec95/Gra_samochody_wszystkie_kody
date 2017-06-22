#pragma strict

function Start () {

}

function Update () 
{
	if(Input.GetKey(KeyCode.Escape))
	{
		Application.Quit();
		Debug.Log("Wyjscie");
	}
}


function Single()
{
	Application.LoadLevel("Single");
}

function Exit()
{
	Application.Quit();
	Debug.Log("Wyjscie");
}

function RateThisGame()
{
	Application.OpenURL("https://play.google.com/store/apps/details?id=com.FastAndCriminals.grygoGame");
}