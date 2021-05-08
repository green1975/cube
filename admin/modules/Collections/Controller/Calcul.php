<?php

namespace Collections\Controller;

class Calcul {
    public function addition (int $a, int $b){
        return $a + $b;
    }

    public function soustraction (int $a, int $b) {
        if($a > $b) {
            return $a - $b;
        } else {
            return $b -$a;
        }
    }

    public function division( int $a, $b) {
        if( $b != 0 && $a > $b) {
            return $a/$b;
        } else {
            return "calcul impossible";
        }
    }

}