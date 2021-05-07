<?php 

use PHPUnit\Framework\TestCase;
use Collections\Controller\Trash;

class TrashTest extends TestCase
{
    public function testNameCanBeNull(): void
    {
        $trash = new Trash();

        $this->assertEquals(
            null,
            $trash->collection(null)
        );
    }

}
