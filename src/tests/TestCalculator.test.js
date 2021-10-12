import { it } from "@jest/globals";
import { mount } from "@vue/test-utils";
import Calculator from "../history/BestCalculator.vue";

describe("Test Calc", () => {
  it("Test first operand input value", () => {
    const wrapper = mount(Calculator);
    const operand1 = wrapper.find("input[name=operand1]");
    operand1.setValue("1");
    //   operand1.element.value = '1'
    //   operand1.trigger('input')
    expect(wrapper.vm.operand1).toBe(1);
  });

  it("Test Second operand input value", () => {
    const wrapper = mount(Calculator);
    const operand2 = wrapper.find("input[name=operand2]");
    operand2.setValue("2");
    //   operand1.element.value = '1'
    //   operand1.trigger('input')
    expect(wrapper.vm.operand2).toBe(2);
  });

  it("Test method sum", () => {
    const wrapper = mount(Calculator);

    const operand1 = wrapper.find("input[name=operand1]");
    operand1.setValue("1");

    const operand2 = wrapper.find("input[name=operand2]");
    operand2.setValue("2");

    const methodSum = wrapper.find('button[name="operand"]');
    methodSum.trigger("click");

    expect(wrapper.vm.result).toBe(3);
  });

  it("Test method div", () => {
    const wrapper = mount(Calculator);

    const operand1 = wrapper.find("input[name=operand1]");
    operand1.setValue("4");

    const operand2 = wrapper.find("input[name=operand2]");
    operand2.setValue("2");

    const operands = wrapper.find('button[name="operand"]');
    operands.trigger("click");
    // expect(wrapper.vm.result).toBe(2);
  });

  it("Testing calc element ", () => {
    const wrapper = mount(Calculator);

    const clickOp = wrapper.find("button[name=element]");
    clickOp.trigger("click");
  });

  it("Testing calc DeleteElement ", () => {
    const wrapper = mount(Calculator);

    const deleteElement = wrapper.find("button[name=deleteElement]");
    deleteElement.trigger("click");
  });

  it("Testing input checkboxes", () => {
    const wrapper = mount(Calculator);
    const board = wrapper.find("input[name=board]");
    board.setChecked(true);
    //   operand1.element.value = '1'
    //   operand1.trigger('input')
    expect(wrapper.vm.board).toBe(true);
  });

  it("Testing label inputes", () => {
    const wrapper = mount(Calculator);

    const clickOp = wrapper.find("input[name=op1]");
    clickOp.setChecked();

    expect(wrapper.vm.clickOp)
  });

  it("Testing label inputes", () => {
    const wrapper = mount(Calculator);

    const clickOp = wrapper.find("input[name=op2]");
    clickOp.setChecked();

    expect(wrapper.vm.clickOp);
  });
});
