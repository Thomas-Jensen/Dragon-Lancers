<?php

class Author extends Eloquent
{
    public function post()
    {
        return $this->hasMany('Post');
    }
}
