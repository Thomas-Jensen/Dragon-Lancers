<?php

class Post extends Eloquent
{
    public function authors()
    {
        return $this->belongsTo('Author');
    }
}
