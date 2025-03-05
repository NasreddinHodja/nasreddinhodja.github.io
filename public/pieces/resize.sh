#!/usr/bin/env sh

pieces=("blowing_early.png"
        "cuidado_na_hora.png"
        "ela_nao_pode.png"
        "get_right.png"
        "heartbreak_welkin_pain_welkin.png"
        "lil_boi.png"
        "morreria_de_tanto_penar.png"
        "mybitchhinatathick.png"
        "untitled_0041.png"
        "untitled_0049.png"
        "untitled_0057.png")

for piece in "${pieces[@]}"; do
    magick $piece -resize 500x $piece
done;
