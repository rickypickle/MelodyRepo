#pragma strict

var speed = 1.0;
var Character : GameObject;

var east : GameObject;
var west : GameObject;
var north : GameObject;
var south : GameObject;

var eastStand : GameObject;
var westStand : GameObject;
var northStand : GameObject;
var southStand : GameObject;

Character = GameObject.FindGameObjectWithTag("Player");

east = GameObject.FindGameObjectWithTag("East");
west = GameObject.FindGameObjectWithTag("West");
north = GameObject.FindGameObjectWithTag("North");
south = GameObject.FindGameObjectWithTag("South");

westStand = GameObject.FindGameObjectWithTag("eastIdle");
eastStand = GameObject.FindGameObjectWithTag("westIdle");
northStand = GameObject.FindGameObjectWithTag("northIdle");
southStand = GameObject.FindGameObjectWithTag("southIdle");



var eastAnim:exSpriteAnimation;
var westAnim:exSpriteAnimation;
var southAnim:exSpriteAnimation;
var northAnim:exSpriteAnimation;

var eastIdle:exSpriteAnimation;
var westIdle:exSpriteAnimation;
var southIdle:exSpriteAnimation;
var northIdle:exSpriteAnimation;

eastAnim = east.GetComponent.<exSpriteAnimation>();	
westAnim = west.GetComponent.<exSpriteAnimation>();	
southAnim = south.GetComponent.<exSpriteAnimation>();	
northAnim = north.GetComponent.<exSpriteAnimation>();	

eastIdle = east.GetComponent.<exSpriteAnimation>();	
westIdle = west.GetComponent.<exSpriteAnimation>();	
southIdle = south.GetComponent.<exSpriteAnimation>();	
northIdle = north.GetComponent.<exSpriteAnimation>();

east.SetActive(false);
south.SetActive(false);
north.SetActive(false);
west.SetActive(false);
eastStand.SetActive(true);
westStand.SetActive(false);
northStand.SetActive(false);
southStand.SetActive(false);


function Update () 
{
	transform.Translate(Input.GetAxisRaw("Vertical") * Vector3.forward * speed);
	transform.Translate(Input.GetAxisRaw("Horizontal") * Vector3.right * speed);
	
	//Debug.Log(KeyCode.
	if(Input.GetKeyDown(KeyCode.UpArrow)){
		//Debug.Log("Hello");
		east.SetActive(false);
		south.SetActive(false);
		north.SetActive(true);
		west.SetActive(false);
		eastStand.SetActive(false);
westStand.SetActive(false);
northStand.SetActive(false);
southStand.SetActive(false);
	}
	else if(Input.GetKeyDown(KeyCode.LeftArrow)){
		//Debug.Log("Hello");
		east.SetActive(false);
		south.SetActive(false);
		north.SetActive(false);
		west.SetActive(true);
		eastStand.SetActive(false);
westStand.SetActive(false);
northStand.SetActive(false);
southStand.SetActive(false);
	}
	else if(Input.GetKeyDown(KeyCode.RightArrow)){
		//Debug.Log("Hello");
		east.SetActive(true);
		south.SetActive(false);
		north.SetActive(false);
		west.SetActive(false);
		eastStand.SetActive(false);
westStand.SetActive(false);
northStand.SetActive(false);
southStand.SetActive(false);
	}
	else if(Input.GetKeyDown(KeyCode.DownArrow)){
		//Debug.Log("Hello");
		east.SetActive(false);
		south.SetActive(true);
		north.SetActive(false);
		west.SetActive(false);
		eastStand.SetActive(false);
westStand.SetActive(false);
northStand.SetActive(false);
southStand.SetActive(false);
	}
	else if(Input.GetKeyUp(KeyCode.UpArrow)){
		east.SetActive(false);
		south.SetActive(false);
		north.SetActive(false);
		west.SetActive(false);
		eastStand.SetActive(false);
westStand.SetActive(false);
northStand.SetActive(true);
southStand.SetActive(false);
	}
	else if (Input.GetKeyUp(KeyCode.DownArrow)){
		east.SetActive(false);
		south.SetActive(false);
		north.SetActive(false);
		west.SetActive(false);
		eastStand.SetActive(false);
westStand.SetActive(false);
northStand.SetActive(false);
southStand.SetActive(true);
	}
	else if (Input.GetKeyUp(KeyCode.RightArrow)){
		east.SetActive(false);
		south.SetActive(false);
		north.SetActive(false);
		west.SetActive(false);
		eastStand.SetActive(true);
westStand.SetActive(false);
northStand.SetActive(false);
southStand.SetActive(false);
	}
	else if (Input.GetKeyUp(KeyCode.LeftArrow)){
		east.SetActive(false);
		south.SetActive(false);
		north.SetActive(false);
		west.SetActive(false);
		eastStand.SetActive(false);
westStand.SetActive(true);
northStand.SetActive(false);
southStand.SetActive(false);
	}
}