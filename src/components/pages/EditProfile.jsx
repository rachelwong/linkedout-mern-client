import React from 'react'
import {Title, FieldBody, Radio, Icon, Select, FieldLabel, TextArea, Field, Label, Control, Input, Button} from 'bloomer'
import "../../styles/login.scss"

const EditProfile = () => { 
  return (
<div className="editProfileContainer" >
    <div className="editProfile_back_rect"></div>
    <div className="editProfile_front_rect"></div>
    <div className="editProfile_haticon">
        <Icon className="edit_wizardHat fas fa-hat-wizard fa-3x" />
    </div>
    <div className="editProfile_giticon">
        <Icon className="edit_githubalt fab fa-github-alt fa-3x" />
    </div>
    <div className="editProfileLeft">
    </div>
        <div className="editProfileRight">
        <div className="editProfileBox">
                    <div className="editProfile_rect"></div>

        <Title className="editProfile_Title" isSize={2}>Edit Your Profile</Title>
        <br/>
        
        {/* GIVEN NAMES */}
        <Field isHorizontal>
            <FieldLabel isNormal>
                <Label>Given Names: </Label>
            </FieldLabel>
            <FieldBody>
                <Field isGrouped>
                    <Control isExpanded>
                        <Input className="editProfileInput" type="text" placeholder='Given Names' value=""/>
                    </Control>
                </Field>
            </FieldBody>
        </Field>

        {/* SURNAME */}
        <Field isHorizontal>
            <FieldLabel isNormal>
                <Label>Surname: </Label>
            </FieldLabel>
            <FieldBody>
                <Field isGrouped>
                    <Control isExpanded>
                        <Input className="editProfileInput" type="text" placeholder='Surname' value=""/>
                    </Control>
                </Field>
            </FieldBody>
        </Field>

        {/* EMAIL */}
        <Field isHorizontal>
            <FieldLabel isNormal>
                <Label>Email: </Label>
            </FieldLabel>
            <FieldBody>
                <Field isGrouped>
                    <Control isExpanded>
                        <Input className="editProfileInput" type="text" placeholder='Contact email address' value=""/>
                    </Control>
                </Field>
            </FieldBody>
        </Field>

        {/* PASSWORD */}
        <Field isHorizontal>
            <FieldLabel isNormal>
                <Label>Password: </Label>
            </FieldLabel>
            <FieldBody>
                <Field isGrouped>
                    <Control isExpanded>
                        <Input className="editProfileInput" type="password" placeholder='' value=""/>
                    </Control>
                </Field>
            </FieldBody>
        </Field>

        {/* PASSWORD CONFIRM */}
        <Field isHorizontal>
            <FieldLabel isNormal>
                <Label>Confirm Password</Label>
            </FieldLabel>
            <FieldBody>
                <Field isGrouped>
                    <Control isExpanded>
                        <Input className="editProfileInput" type="password" placeholder='' value=""/>
                    </Control>
                </Field>
            </FieldBody>
        </Field>

        {/* WEBSITE */}
        <Field isHorizontal>
            <FieldLabel isNormal>
                <Label>Github: </Label>
            </FieldLabel>
            <FieldBody>
                <Field isGrouped>
                    <Control isExpanded>
                        <Input className="editProfileInput" type="text" placeholder='http://...' value=""/>
                    </Control>
                </Field>
            </FieldBody>
        </Field>

        {/* LINKEDIN */}
        <Field isHorizontal>
            <FieldLabel isNormal>
                <Label>LinkedIn: </Label>
            </FieldLabel>
            <FieldBody>
                <Field isGrouped>
                    <Control isExpanded>
                        <Input className="editProfileInput" type="text" placeholder='LinkedIn URL' value=""/>
                    </Control>
                </Field>
            </FieldBody>
        </Field>

        {/* TWITTER */}
        <Field isHorizontal>
            <FieldLabel isNormal>
                <Label>Twitter: </Label>
            </FieldLabel>
            <FieldBody>
                <Field isGrouped>
                    <Control isExpanded>
                        <Input className="editProfileInput" type="text" placeholder='Your Twitter account handle' value=""/>
                    </Control>
                </Field>
            </FieldBody>
        </Field>

        {/* BIO */}
        <Field isHorizontal>
            <FieldLabel isNormal>
                <Label>Bio: </Label>
            </FieldLabel>
            <FieldBody>
                <Field>
                    <Control>
                        <TextArea className="editProfileInput" placeholder='Your goals, achievements in the course, what you are interested in, the direction you want to take your career' />
                    </Control>
                </Field>
            </FieldBody>
        </Field>

        {/* GRADUATED */}
        <Field isHorizontal>
            <FieldLabel isNormal>
                <Label>Graduated: </Label>
            </FieldLabel>
            <FieldBody>
                <Field isGrouped>
                    <Control isExpanded>
                        <Input className="editProfileInput dateofgraduate" type="date" value=""/>
                    </Control>
                </Field>
            </FieldBody>
        </Field>

        {/* FIELD OF INTEREST */}
        <Field isHorizontal>
            <FieldLabel isNormal>
                <Label>Field of Interest</Label>
            </FieldLabel>
            <FieldBody>
                <Field>
                    <Control>
                        <Select>
                            <option id="frontend" value="">Front-end</option>
                            <option id="backend" value="">Back-end</option>            
                            <option id="frontBack" value="">I like both</option>
                        </Select>
                    </Control>
                </Field>
            </FieldBody>
        </Field>

        {/* TECH STACK */}
        <Field isHorizontal>
            <FieldLabel isNormal>
                <Label>Tech Stack</Label>
            </FieldLabel>
            <FieldBody>
                <div class="select is-multiple">
                <select multiple size="3">
                    <option value="ruby">Ruby</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="javascript">Javascript</option>
                    <option value="mongo">Mongo</option>
                    <option value="express">Express</option>
                    <option value="react">React</option>
                    <option value="node">Node</option>
                </select>
                </div>
            </FieldBody>
        </Field>

        {/* SEEKING */}
        <Field isHorizontal>
            <FieldLabel isNormal>
                <Label>Seeking</Label>
            </FieldLabel>
            <FieldBody>
                <div class="select is-multiple">
                <select multiple size="3">
                    <option value="internship">Internship</option>
                    <option value="fullTime">FT Onsite</option>
                    <option value="partTime">PT Onsite</option>
                    <option value="contract">Contract</option>
                    <option value="remote">Remote</option>
                    <option value="unavailable">Unavailable</option>
                </select>
                </div>
            </FieldBody>
        </Field>

        {/* LOCATION */}
        <Field isHorizontal>
            <FieldLabel isNormal>
                <Label>Location</Label>
            </FieldLabel>
            <FieldBody>
                <Field>
                    <Control>
                        <Select>
                            <option value="">Brisbane</option>
                            <option value="">Melbourne</option>            
                            <option value="">Sydney</option>
                        </Select>
                    </Control>
                </Field>
            </FieldBody>
        </Field>

        {/* HIREABLE */}
        <Field isHorizontal>
            <FieldLabel isNormal>
                <Label>Hireable?</Label>
            </FieldLabel>
            <FieldBody>
                <Control>
                    <Radio name="hireable"> Yes </Radio>
                    <Radio name="hireable"> No </Radio>
                </Control>
            </FieldBody>
        </Field>
        <br/>
        {/* SUBMIT BUTTON */}
        <Field isGrouped>
            <Control>
                <Button className="saveProfileBttn" isColor='primary'>Save Profile</Button>
            </Control>
            <Control>

                <Button className="deleteProfileBttn" isColor='primary'>Delete Profile</Button>
            </Control>
        </Field>
        </div>
    </div>
</div>
  )
}

export default EditProfile
