#pragma strict

var speed = 1.0;
var Character : GameObject;

var east : GameObject;
var west : GameObject;
var north : GameObject;
var south : GameObject;

var northEast : GameObject;
var northWest : GameObject;
var southEast : GameObject;
var southWest : GameObject;

var eastStand : GameObject;
var westStand : GameObject;
var northStand : GameObject;
var southStand : GameObject;

Character = GameObject.FindGameObjectWithTag("Player");

east = GameObject.FindGameObjectWithTag("East");
west = GameObject.FindGameObjectWithTag("West");
north = GameObject.FindGameObjectWithTag("North");
south = GameObject.FindGameObjectWithTag("South");

northEast = GameObject.FindGameObjectWithTag("northEast");
northWest = GameObject.FindGameObjectWithTag("northWest");
southEast = GameObject.FindGameObjectWithTag("southEast");
southWest = GameObject.FindGameObjectWithTag("southWest");

westStand = GameObject.FindGameObjectWithTag("eastIdle");
eastStand = GameObject.FindGameObjectWithTag("westIdle");
northStand = GameObject.FindGameObjectWithTag("northIdle");
southStand = GameObject.FindGameObjectWithTag("southIdle");



var eastAnim:exSpriteAnimation;
var westAnim:exSpriteAnimation;
var southAnim:exSpriteAnimation;
var northAnim:exSpriteAnimation;

var northEastAnim:exSpriteAnimation;
var norhtWestAnim:exSpriteAnimation;
var southEastAnim:exSpriteAnimation;
var southWestAnim:exSpriteAnimation;


var eastIdle:exSpriteAnimation;
var westIdle:exSpriteAnimation;
var southIdle:exSpriteAnimation;
var northIdle:exSpriteAnimation;

eastAnim = east.GetComponent.<exSpriteAnimation>();	
westAnim = west.GetComponent.<exSpriteAnimation>();	
southAnim = south.GetComponent.<exSpriteAnimation>();	
northAnim = north.GetComponent.<exSpriteAnimation>();	

northEastAnim = northEast.GetComponent.<exSpriteAnimation>();	
norhtWestAnim = northWest.GetComponent.<exSpriteAnimation>();	
southEastAnim = southEast.GetComponent.<exSpriteAnimation>();	
southWestAnim = southWest.GetComponent.<exSpriteAnimation>();	

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

northEast.SetActive(false);
northWest.SetActive(false);
southEast.SetActive(false);
southWest.SetActive(false);

var keyCount : int = 0;
var keyPressed : String = "";
function Update () 
{

	transform.Translate(Input.GetAxisRaw("Vertical") * Vector3.forward * speed);
	transform.Translate(Input.GetAxisRaw("Horizontal") * Vector3.right * speed);
	
	// multi directional clauses
	if((Input.GetKey(KeyCode.UpArrow))&&(Input.GetKey(KeyCode.RightArrow))){
	Debug.Log("NE");
		east.SetActive(false);
		south.SetActive(false);
		north.SetActive(false);
		west.SetActive(false);
		eastStand.SetActive(false);
		westStand.SetActive(false);
		northStand.SetActive(false);
		southStand.SetActive(false);

	northEast.SetActive(true);
	northWest.SetActive(false);
	southEast.SetActive(false);
	southWest.SetActive(false);
	}
	else if((Input.GetKey(KeyCode.UpArrow))&&(Input.GetKey(KeyCode.LeftArrow))){
	Debug.Log("NW");
		east.SetActive(false);
		south.SetActive(false);
		north.SetActive(false);
		west.SetActive(false);
		eastStand.SetActive(false);
		westStand.SetActive(false);
		northStand.SetActive(false);
		southStand.SetActive(false);

	northEast.SetActive(false);
	northWest.SetActive(true);
	southEast.SetActive(false);
	southWest.SetActive(false);
	}
	else if((Input.GetKey(KeyCode.DownArrow))&&(Input.GetKey(KeyCode.RightArrow))){
	Debug.Log("SE");
		east.SetActive(false);
		south.SetActive(false);
		north.SetActive(false);
		west.SetActive(false);
		eastStand.SetActive(false);
		westStand.SetActive(false);
		northStand.SetActive(false);
		southStand.SetActive(false);

	northEast.SetActive(false);
	northWest.SetActive(false);
	southEast.SetActive(true);
	southWest.SetActive(false);
	}
	else if((Input.GetKey(KeyCode.DownArrow))&&(Input.GetKey(KeyCode.LeftArrow))){
	Debug.Log("SW");
		east.SetActive(false);
		south.SetActive(false);
		north.SetActive(false);
		west.SetActive(false);
		eastStand.SetActive(false);
		westStand.SetActive(false);
		northStand.SetActive(false);
		southStand.SetActive(false);

	northEast.SetActive(false);
	northWest.SetActive(false);
	southEast.SetActive(false);
	southWest.SetActive(true);
	}
	else if(Input.GetKey(KeyCode.UpArrow)){
		//Debug.Log("Hello");
		east.SetActive(false);
		south.SetActive(false);
		north.SetActive(true);
		west.SetActive(false);
		eastStand.SetActive(false);
westStand.SetActive(false);
northStand.SetActive(false);
southStand.SetActive(false);

	northEast.SetActive(false);
	northWest.SetActive(false);
	southEast.SetActive(false);
	southWest.SetActive(false);
	}
	else if(Input.GetKey(KeyCode.LeftArrow)){
		//Debug.Log("Hello");
		east.SetActive(false);
		south.SetActive(false);
		north.SetActive(false);
		west.SetActive(true);
		eastStand.SetActive(false);
westStand.SetActive(false);
northStand.SetActive(false);
southStand.SetActive(false);

	northEast.SetActive(false);
	northWest.SetActive(false);
	southEast.SetActive(false);
	southWest.SetActive(false);
	}
	else if(Input.GetKey(KeyCode.RightArrow)){
		//Debug.Log("Hello");
		east.SetActive(true);
		south.SetActive(false);
		north.SetActive(false);
		west.SetActive(false);
		eastStand.SetActive(false);
		westStand.SetActive(false);
		northStand.SetActive(false);
		southStand.SetActive(false);

	northEast.SetActive(false);
	northWest.SetActive(false);
	southEast.SetActive(false);
	southWest.SetActive(false);
	}
	else if(Input.GetKey(KeyCode.DownArrow)){
		//Debug.Log("Hello");
		east.SetActive(false);
		south.SetActive(true);
		north.SetActive(false);
		west.SetActive(false);
		eastStand.SetActive(false);
westStand.SetActive(false);
northStand.SetActive(false);
southStand.SetActive(false);

	northEast.SetActive(false);
	northWest.SetActive(false);
	southEast.SetActive(false);
	southWest.SetActive(false);
	
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

	northEast.SetActive(false);
	northWest.SetActive(false);
	southEast.SetActive(false);
	southWest.SetActive(false);
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

northEast.SetActive(false);
	northWest.SetActive(false);
	southEast.SetActive(false);
	southWest.SetActive(false);
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

northEast.SetActive(false);
	northWest.SetActive(false);
	southEast.SetActive(false);
	southWest.SetActive(false);
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

northEast.SetActive(false);
	northWest.SetActive(false);
	southEast.SetActive(false);
	southWest.SetActive(false);
	}
	
	
}