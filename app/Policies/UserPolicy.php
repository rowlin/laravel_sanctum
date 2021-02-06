<?php

namespace App\Policies;

use App\Models\Users\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    protected $user;
    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct(User $u)
    {
        $this->user = $u;
    }

    /**
     * @return bool
     */

    public function viewAll(){
       return $this->user->isAdmin();
    }

    /**
     * @return bool
     */

    public function view(){
        return true;
    }

    /**
     * @param int $id
     * @return bool
     */

    public function update(int $id){
        return ($this->user->id === $id && $this->user->isAdmin());
    }

    /**
     * @param int $id
     * @return bool
     */

    public function delete(int $id){
        return ($this->user->id === $id && $this->user->isAdmin());
    }

}
