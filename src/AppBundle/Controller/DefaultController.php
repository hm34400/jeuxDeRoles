<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    /**
     * @Route("/")
     */
    public function indexAction()
    {
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig');
    }
    /**
     * @Route("/start", name="homepage")
     */
    public function startPage()
    {
        // replace this example code with whatever you need
        return $this->render('default/start.html.twig');
    }
}
