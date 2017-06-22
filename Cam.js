#pragma strict

var player : Transform;


function Start () {
	player = gameObject.FindWithTag("Player").transform;
}

function Update () 
{
	transform.position = Vector3(player.transform.position.x, 0, player.transform.position.z);
}