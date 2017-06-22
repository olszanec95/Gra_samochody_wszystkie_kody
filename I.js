#pragma strict
import UnityEngine.UI;

var info : Text;
var timer : float = 0.0f;
var record : float = 20f;

var yourCheckPoint : int = 0;
var checkPoint : int = 3;



function Start () 
{
	info.enabled = true;
	info.text = "Beat record";
}

function Update () 
{
	if(Input.GetMouseButton(0))
	{
		info.enabled = false;
		timer += Time.deltaTime;
	}
}

function Finish()
{
		
}