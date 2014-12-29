<?php

class EmailController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */

    public function contact()
    {

        //Get all data and store it in data variable
        $data = Input::all();

        //Setup rules in a rules array
        $rules = array(
            'name' => 'required',
            'email' => 'required|email',
            'messages' => 'required|min:5'
        );

        //initialize a new instance of validator with our data and rules
        $validation = Validator::make ($data, $rules);

        //run our validation against rules if passes send mail
        if ($validation -> passes())
        {

        Mail::queue('emails.contact', $data, function($message) use ($data)
            {
                $message->from($data['email'], $data['name']);
                $message->to('thomaspatrickjensen')->subject('Dragon Lancers contact form');
            }
        );
        return 'Sent!';
        }
        else{
            return Redirect::back()->withInput()->withErrors($validation->messages());
        }
    }


	public function index()
	{
		//
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}


	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}


	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}


}
