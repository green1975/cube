<?php
    use PHPUnit\Framework\TestCase;
    use Collections\Controller\Calcul;
    
    class CalculTest extends TestCase
    {
        public function testVerifyResulAdditiontTrue(): void
        {
            $calculate = new Calcul();
            $result = $calculate->addition(5, 4);
            $this->assertSame(9, $result);
        }

        public function testVerifyResultSoustractionTRue(): void
        {
            $calculate = new Calcul();
            $result = $calculate->soustraction(5, 4);
            $this->assertSame(1, $result);
        }

        public function testVerifyDivisionFalse() :void 
        {
            $calculate = new Calcul();
            $result = $calculate->division(6, 8);
            $this->assertEquals('calcul impossible', $result);
        }
    
    }

?>