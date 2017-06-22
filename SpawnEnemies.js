var enemy : GameObject[];                // The enemy prefab to be spawned.
var spawnTime : float = 7f;            // How long between each spawn.
var spawnPoints : Transform[];         // An array of the spawn points this enemy can spawn from.
var enemyInt : int = 0;
var enemyMax : int = 10;


function Start ()
{
    // Call the Spawn function after a delay of the spawnTime and then continue to call after the same amount of time.
    InvokeRepeating ("Spawn", spawnTime, spawnTime);
}


function Spawn ()
{
    if(enemyInt >= enemyMax)
    {
        return;
    }

    var spawnPointIndex : int = Random.Range (0, spawnPoints.Length);
    var enemyIndex : int = Random.Range(0, enemy.Length);

    Instantiate (enemy[enemyIndex], spawnPoints[spawnPointIndex].position, spawnPoints[spawnPointIndex].rotation);
    enemyInt++;
}