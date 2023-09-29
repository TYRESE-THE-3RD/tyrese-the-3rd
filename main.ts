let list: number[] = []
input.onButtonPressed(Button.A, function () {
    serial.setWriteLinePadding(0)
    music.ringTone(262)
    null.move(1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
})
music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 6999), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 128), music.PlaybackMode.UntilDone)
for (let index = 0; index <= 4; index++) {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
for (let value of list) {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
while (false) {
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
}
basic.forever(function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
