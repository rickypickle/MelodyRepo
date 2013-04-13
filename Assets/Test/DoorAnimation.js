#pragma strict

static var door : GameObject;
static var doorAnim:exSpriteAnimation;
static var totalFrames: int;

static function openAnim(tag:String){
	door = GameObject.FindGameObjectWithTag(tag);
	doorAnim = door.GetComponent.<exSpriteAnimation>();	
	//doorAnim.GetCurrentAnimation().speed = 1.0;
	doorAnim.Play("Door");
	doorAnim.GetCurrentAnimation().speed = 1.0f;

}
static function closeAnim(tag:String){
Debug.Log(tag);
Debug.Log(doorAnim.GetCurFrameIndex());
	//door = GameObject.FindGameObjectWithTag(tag);
	//doorAnim = door.GetComponent.<exSpriteAnimation>();	
	//doorAnim.GetCurrentAnimation().speed = 1.0;
	doorAnim.Play("Door", doorAnim.GetCurFrameIndex());
	doorAnim.GetCurrentAnimation().speed = -1.0f;

}
function Start () {

}

function Update () {

}