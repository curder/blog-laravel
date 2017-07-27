<?php

namespace App\Http\Controllers;

use App\Entities\Link;

class VotesController extends Controller
{
    /**
     * @param Link $link
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Link $link)
    {
        auth()->user()->votes()->toggle($link);

        return back();
    }
}
