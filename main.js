
song1 = "";
song2 = "";

song1_status = "";
song2_status = "";

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("risk-136788.mp3");

}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

}
function draw()
{
    image(video, 0, 0, 600, 500);
}
