<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $table = 'tasks';
    protected $fillable = ['title','project_id'];

    public function project()
    {
        return $this->belongsTo('App\Project', 'project_id');
    }
}
