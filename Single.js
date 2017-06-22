#pragma strict

var manager : Manager;

function Start () {
	manager = gameObject.Find("Manager").GetComponent(Manager);
}

function Update () 
{
	if(Input.GetKey(KeyCode.Escape))
	{
		Application.LoadLevel("Menu");
	}
}


function Free()
{
	manager.typeGame = "_Free";
	Application.LoadLevel("Chellange_Map");
}

function Police()
{
	manager.typeGame = "_Police";
	Application.LoadLevel("Chellange_Map");
}

function Race()
{
	Application.LoadLevel("Race");
}

function Chellange()
{
	Application.LoadLevel("Chellange");
}

function Back()
{
	Application.LoadLevel("Menu");
}