// test reducres
import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store from '../store/configureStore';
import { Conversation } from '../components/chats/chatRoom';
import { AllUsers } from '../components/chats/chatSideBar';
import { Home } from '../components/Home';

const MockApp = () => {
    return (<BrowserRouter>
    <Provider store={store}>
        <Routes>
            <Route path="/" element={Home}/>
            <Route path="/conversation/:id" element={Conversation}/>
            <Route path="/newconversation" element={AllUsers}/>
        </Routes>
    </Provider>
    </BrowserRouter>)
};

describe('test Conversation component', () => {
    beforeEach(() => {
        render(<MockApp />);

    });
    it('should render correctly', () => {
        const tree = renderer.create(<MockApp />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
}
);


