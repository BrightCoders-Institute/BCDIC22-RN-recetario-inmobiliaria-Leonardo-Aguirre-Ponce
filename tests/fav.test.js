import { TouchableOpacity } from 'react-native'

describe('Test de boton favorito', () => {
    it('Test click', () => {
        const mockCallBack = jest.fn();
        
        const button = shallow((<TouchableOpacity onClick={mockCallBack}>Ok!</TouchableOpacity>));
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});